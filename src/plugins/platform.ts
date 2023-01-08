import { waitBy } from '@/utils/wait_by'
export const platform = {
  async call (funName: string, params: any[]): Promise<void> {
    try {
      await waitBy(() => !!window.pywebview)
      const fun = window.pywebview?.api[funName]
      fun.apply(null, params)
    } catch (error) {
      console.log(error)
    }
  }
}
