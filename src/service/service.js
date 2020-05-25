class Service {
  _urlBase = 'http://localhost:3004/';

  getResource = async (url) => {
    const result = fetch(`${this._urlBase}${url}`);
    if(result.ok >= 400) {
      throw new Error(`Ошибка ответа сервера, статус ошибки ${(await result).status}`);
    }
    return (await result).json();
  }

  getAllModels = async () => {
    const data = await this.getResource('catalog');
    return data;
  }

  getModel = async (id) => {
    const data = await this.getResource(`models/${id}`);
    return data;
  }

  postReview = async (obj) => {
    const post = await fetch(`${this._urlBase}feedback`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'      
      },
      body: JSON.stringify(obj)
    });
    if(post.ok >= 400) {
      throw new Error(`Ошибка ответа сервера, статус ошибки ${(await post).status}`);
    }
    return post;
  }
}

export default Service;