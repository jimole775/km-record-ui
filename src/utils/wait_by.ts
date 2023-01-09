export async function waitBy (condition: () => Promise<any> | any, delay?: number): Promise<any> {
  let loopTimes = 20
  const loopEntity = async (loopResolve: Function): Promise<any> => {
    const expection = await condition()
    if (!!expection || loopTimes <= 0) {
      return loopResolve(expection)
    } else {
      return setTimeout(() => {
        loopTimes--
        return loopEntity(loopResolve)
      }, delay || 150)
    }
  }
  return new Promise((resolve: Function) => {
    return loopEntity(resolve)
  })
}
