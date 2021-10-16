const punkapi = require("./punkapi")
// @ponicode
describe("punkapi.default.state", () => {
    test("0", () => {
        let callFunction = () => {
            punkapi.default.state()
        }
    
        expect(callFunction).not.toThrow()
    })
})
