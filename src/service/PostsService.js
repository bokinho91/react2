class PostsService {
  async getAll() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response = await data.json();
    return response;
  }
  async getPost(id) {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const response = await data.json();
    return response;
  }
}

const postService = new PostsService();
export default postService;

// ovde smo napravili klasu PostsService koja ce nam sluziti za slanje request-ova na backend
// unutar nje smo napravili dve metode getAll koja nam vraca niz post-ova koje prikazujemo u komponenti Posts
// i getPost koja na osnovu prosledjenog id-a dobavlja sa backend-a single post koji prikazujemo u Post komponenti
