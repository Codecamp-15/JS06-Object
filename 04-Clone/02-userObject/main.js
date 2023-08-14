// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false
//point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true

// ```js
// const state1 = { username: 'john', point: 100, loading: true };
// ```

/*const state1 = { username: "john", point: 100, loading: true };

(state1.point = 75),
  (state1.loaing = false),
  (state1.success = true),
  console.log(state1);

const cloneState = {};
Object.assign(cloneState, state1);
console.log(cloneState);
*/

const state1 = { username: "john", point: 100, loading: true };

const state2 = {
  loading: false,
  point: 75,
  success: true,
};

const cloneStates = {};
Object.assign(cloneStates, state1, state2);
console.log(cloneStates);

//Teacher method
const newState = {};
Object.assign(
  newState,
  state1,
  { point: 75, loading: false },
  { success: true }
);
console.log(newState);
