const loadData = async () => {
  const URL = `https://forbes400.onrender.com/api/forbes400?limit=10`;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};
const displayData = (data) => {
  const tbody = document.getElementById("tbody");
  let serial = 0;
  data.forEach((billionaire) => {
    const { person, countryOfCitizenship, industries,position,finalWorth } = billionaire;
    tbody.innerHTML += `
        <tr>
        <th scope="row">${serial++}</th>
        <td>${person}</td>
        <td>${countryOfCitizenship}</td>
        <td>${industries}</td>
        <td>${position}</td>
        <td>@${finalWorth}</td>
      </tr>
        `;
    console.log("done");
  });
};

loadData();
