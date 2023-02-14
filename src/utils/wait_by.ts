/**
 * @ Author: Rongxis
 * @ Create Time: 2023-02-13 21:54:12
 * @ Modified by: Rongxis
 * @ Modified time: 2023-02-14 01:40:33
 * @ Description:
 */

export async function waitBy (condition: () => Promise<any> | any, delay?: number): Promise<any> {
  const sum = delay || 3000
  const singleSpend = 150
  let loopTimes = sum / singleSpend
  const loopEntity = async (loopResolve: Function): Promise<any> => {
    const expection = await condition()
    if (!!expection || loopTimes <= 0) {
      return loopResolve(expection)
    } else {
      return setTimeout(() => {
        loopTimes--
        return loopEntity(loopResolve)
      }, singleSpend)
    }
  }
  return new Promise((resolve: Function) => {
    return loopEntity(resolve)
  })
}
