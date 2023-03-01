const setInnerHtml = (data) => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  let serial = 0;
  let totalField = document.getElementById("total");
  let amount = 0;
  data.forEach((billionaire) => {
    const {
      person,
      countryOfCitizenship,
      industries,
      position,
      finalWorth,
      gender,
      state,
      birthDate,
      city,
      bios,
    } = billionaire;
    const bio = [...bios];
    tbody.innerHTML += `
        <tr onclick="singleBillionairesDetails('${countryOfCitizenship}',${position},'${gender}','${state}','${birthDate}','${city}','${
      person.name
    }','${person.imageExists}','${person?.squareImage}','${
      bio[0]
    }')" data-bs-toggle="modal" data-bs-target="#billionairesDetails">
        <th scope="row">${serial++}</th>
        <td>${person.name}</td>
        <td><i class="fa-solid fa-eye"></i></td>
        <td>${countryOfCitizenship}</td>
        <td>${industries}</td>
        <td>${position}</td>
        <td>$${finalWorth}</td>
      </tr>
        `;
    amount += finalWorth;
  });
  totalField.innerText = "$" + amount.toFixed(2);
};

const loadData = async () => {
  const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/AllBillionaires.json`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    setInnerHtml(data);
  } catch (error) {
    console.log(error);
  }
};

document
  .getElementById("technology-btn")
  .addEventListener("click", async () => {
    const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByIndustryTechnology.json`;
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setInnerHtml(data);
    } catch (error) {
      console.log(error);
    }
  });

document.getElementById("state-btn").addEventListener("click", async () => {
  const URL = `https://raw.githubusercontent.com/Chayti/Billionaire-Diary-resources/main/ByStateZhejiang.json`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    setInnerHtml(data);
  } catch (error) {
    console.log(error);
  }
});

document.getElementById("total-btn").addEventListener("click", () => {
  document.getElementById("tfoot").classList.remove("d-none");
});

const singleBillionairesDetails = (
  citizenship,
  position,
  gender,
  state,
  birthDate,
  city,
  name,
  imageExists,
  squareImage,
  bio
) => {
  document.getElementById("modal-title").innerText = name;
  document.getElementById("bio").innerText = bio;
  const date = new Date(parseFloat(birthDate));
  console.log(date);
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = "";
  modalBody.innerHTML += `
  <div class="row align-items-center">
    <div class="col-md-5">
      <img class="img-fluid" src="${
        imageExists ? squareImage : 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
      }">
    </div>
    <div class="col-md-7 fw-bold">
      <p>Citizenship: ${citizenship}</p>
      <p>Rank: ${position}</p>
      <p>Gender: ${gender}</p>
      <p>State: ${state}</p>
      <p>Birth Date: ${date.toDateString()}</p>
      <p>Gender: ${city}</p>
    </div>
  </div>
`;
};
