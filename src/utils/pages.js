export const getPageCount = (totalCount, limitPosts) => {
    return Math.ceil(totalCount / limitPosts)
}

export const getPagesArray = (totalPages) => {
    let result = []

    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }

    return result
}