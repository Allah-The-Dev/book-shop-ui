import { loadBooks } from "./bookService";


describe("Books", () => {
  const singleBookMockWithNoAvailability = {
    books: [
      {
        isbn: "012346",
        bookName: "React book",
        description: "React Book description",
        author: "Bala",
        publicationYear: 2022,
        smallImageUrl: "imageurlsmall/img.img",
        largeImageUrl: "largeImageurllarge.img",
        price: 128.55,
        numberOfAvailableBooks: 0,
        rating: 4.8,
      },
    ],
  };

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should return books on call GET /books API", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(singleBookMockWithNoAvailability),
    });
    const gotBooks = await loadBooks();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(gotBooks).toEqual(singleBookMockWithNoAvailability);
  });

  it("should return books on call of GET /books?search=java API", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
        json: jest.fn().mockResolvedValue(singleBookMockWithNoAvailability),
      });
      const gotBooks = await loadBooks("java");
  
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith("http://localhost:9090/books?search=java")
      expect(gotBooks).toEqual(singleBookMockWithNoAvailability);
  })
});
