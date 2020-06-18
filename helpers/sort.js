function sort(data, ascending, sortBy) {
    let willBeSortedData = [...data]
    for (let i = 0; i < willBeSortedData.length; i++) {
        for (let j = 0; j < willBeSortedData.length; j++) {
          if (ascending) {
            if (willBeSortedData[i][sortBy] < willBeSortedData[j][sortBy]) {
              let temp = willBeSortedData[i]
              willBeSortedData[i] = willBeSortedData[j]
              willBeSortedData[j] = temp
            }
          } else {
            if (willBeSortedData[i][sortBy] > willBeSortedData[j][sortBy]) {
              let temp = willBeSortedData[i]
              willBeSortedData[i] = willBeSortedData[j]
              willBeSortedData[j] = temp
            }
          }
        }
    }

    return willBeSortedData
}

module.exports = sort