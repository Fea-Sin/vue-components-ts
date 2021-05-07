/**
 * @Author: cqz
 * @Date: 2021-04-30 15:07:59
 * @Last Modified by: cqz
 * @Last Modified time: 2021-04-30 15:34:17
 * @Description:
 */

/**
 * @description auto add loading
 * @param name: add class property default false，when request the value is true
 */

export function addLoading(name: string) {
  return function (target: any, property: string, descriptor: any) {
    const desF = descriptor.value;
    descriptor.value = function (...args: any) {
      this[name] = true;
      // 默认是Promise函数
      const res = desF.apply(this, args);
      if (possiblePromise(res)) {
        res.then(() => {
          this[name] = false;
        });
      } else {
        throw new Error("autoLoading 所装饰函数必须返回Promise");
      }
    };
    return descriptor;
  };
}

/**
 * shallow check a function is Promise
 */
function possiblePromise(res: any): boolean {
  if (res && typeof res.then === "function") {
    return true;
  }
  return false;
}

/**
 * @description higher-order function auto add loading
 * @param warped: the async function
 * @param vm: the class this
 * @param name: class property than sign true or false
 */
export const loadingWrap = (wraped: any, vm: any, name: string) => {
  return (...args: any) => {
    // console.log("传入的参数", args);
    vm[name] = true;
    const res = wraped.apply(this, args);
    if (possiblePromise(res)) {
      res.then(() => {
        vm[name] = false;
      });
    } else {
      throw new Error("loadingWrap 所传入函数必须返回Promise");
    }
  };
};
