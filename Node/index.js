import { getData } from "./app.js";
getData(1)
  //elimize bir promise geldi
  .then((user, post) => console.log(user, post))
  //promise geldi ise then fonksiyonu çalışacak
  .catch((e) => console.log(e));
//bir soru var ise catch ile yakalayıp logluyoruz.
