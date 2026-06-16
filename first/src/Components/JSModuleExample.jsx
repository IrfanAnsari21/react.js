var name = "Irfan Ansari"
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 189000,
    city: "Faridabad",
    state: "Haryana"
}
class Test {
    show() {
        return (
            <h4>In show() of Test Class</h4>
        )
    }
}
var obj = new Test()
function JSModuleExample() {
    return (
        <>
            <h1>JavaScript Module Example</h1>
            <h2>This is Functional Component</h2>
        </>
    )
}

export default JSModuleExample              //default export
export { name, arr, emp, obj}               //name export   {with curly bracket}