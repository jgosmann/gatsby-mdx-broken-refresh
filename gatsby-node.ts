import path from "path"

export const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const template = path.resolve("src/templates/page.tsx")    
    const files = (await graphql(`{
        allMdx {
            nodes {
                parent {
                    ... on File {
                        name
                    }
                }
                internal {
                    contentFilePath
                }
            }
        }
    }`)).data.allMdx.nodes
    files.forEach(file => createPage({
        path: `/${file.parent.name}`,
        component: `${template}?__contentFilePath=${file.internal.contentFilePath}`
    }))
}
