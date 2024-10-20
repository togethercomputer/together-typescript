import Together from 'together-ai';

describe("upload", () => {
    it("should upload file", async () => {
        const together = new Together({
            apiKey: "3c24363cf5506cb56b48e7e99de5e182a1a544965f3d9f38833a6db35d6f7aad",
            baseURL: "https://api.together.ai/v1"
        })
        const output = await together.files.upload('/Users/yogish/Downloads/1mb.jpeg.jsonl', "fine-tune")
        console.log(output)
    })
})
