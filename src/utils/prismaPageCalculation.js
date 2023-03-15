const prismaPageCalculation = ({ page, perPage }) => ({
    skip: Number(perPage) * (Number(page) - 1),
    take: Number(perPage)
})

module.exports = prismaPageCalculation