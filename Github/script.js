const input = document.querySelector(".text");
const search = document.querySelector(".search");
const detail = document.querySelector(".detail");
const userInfo = document.querySelector(".user-info");

search.addEventListener("click", () => {
  async function git() {
    try{
    let data = await fetch(`https://api.github.com/users/${input.value}`);
    let res = await data.json();
    console.log(res);

    let info = document.createElement("div");
    //info.classList.add("data");

    let date = "";
    let month = "";
    let year = "";

    for (let i = 0; i < 10; i++) {
      if (i < 4) {
        year += res.created_at[i];
      } else if (i >= 5 && i < 7) {
        month += res.created_at[i];
      } else if (i >= 8) {
        date += res.created_at[i];
      }
    }
    console.log(date, month, year);
    info.innerHTML = `<img src=${res.avatar_url} alt=""/>
    <p> Joined : ${date} ${month} ${year} </p>
        <p> Repo : ${res.public_repos}</p>

        `;
    userInfo.appendChild(info);
  }catch(error){
    console.log('error fetching user',error);
    userInfo.innerHTML = `<p>Error fetching user: ${error.message} </P>`
  }
  }

  git();
  input.value = '';
  detail.style.display = 'none';

});
