import { waitBy } from '@/utils/wait_by'
export const call = async(funName: string, params: any[]): Promise<void> => {
  try {
    await waitBy(() => !!window.pywebview)
    const fun = window.pywebview?.api[funName]
    fun.apply(null, params)
  } catch (error) {
    console.log(error)
  }
}
