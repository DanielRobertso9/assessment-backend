const randomBtn = document.getElementById("randomButton");
const addBtn = document.getElementById("addButton");
const deleteBtn = document.getElementById("deleteButton");
const showAllBtn = document.getElementById("showAllButton");
const changeBtn = document.getElementById("changeButton");
const responseSection = document.getElementById("response");
let radioBtn1 = document.getElementById("radio1");
let radioBtn2 = document.getElementById("radio2");
let input = document.getElementById("query-input").value;
let id = 0;

const addCompliment = (body) => {
  axios.post(`http://localhost:4000/api/${body.name}/`, body).then((res) => {
    const data = res.data;
    alert(`${body.name} has been added.`);
    addToView(data);
  });
};

function pushInput() {
  let input = document.getElementById("query-input");

  let bodyObj = {
    name: "",
    input: input.value,
  };
  if (radioBtn1.checked) {
    bodyObj.name = "compliment";
    addCompliment(bodyObj);
  } else if (radioBtn2.checked) {
    bodyObj.name = "fortune";
    addCompliment(bodyObj);
  } else {
    alert("Select Compliment or Fortune");
  }
}

const random = () => {
  if (radioBtn1.checked) {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
      const data = res.data;
      alert(data);
      addToView(data);
    });
  } else if (radioBtn2.checked) {
    axios.get("http://localhost:4000/api/fortune/").then((res) => {
      const data = res.data;
      alert(data);
      addToView(data);
    });
  } else {
    alert("Select Compliment or Fortune");
  }
};

const deleteCompliment = () => {
  if (radioBtn1.checked) {
    axios.delete("http://localhost:4000/api/compliment/").then((res) => {
      const data = res.data;
      addToView(data);
    });
  } else if (radioBtn2.checked) {
    axios.delete("http://localhost:4000/api/fortune/").then((res) => {
      const data = res.data;
      addToView(data);
    });
  } else {
    alert("Select Compliment or Fortune");
  }
};

function addToView(data) {
  responseSection.innerHTML = null;

  if (Array.isArray(data) === false) {
    const p = document.createElement("h3");
    const t = document.createTextNode(data);
    p.appendChild(t);

    responseSection.appendChild(p);
  } else {
    data.forEach((item) => {
      const p = document.createElement("h3");
      const t = document.createTextNode(item);
      p.appendChild(t);

      responseSection.appendChild(p);
    });
  }
}

const showAll = () => {
  if (radioBtn1.checked) {
    axios.get("http://localhost:4000/api/complimentAll/").then((res) => {
      const data = res.data;
      addToView(data);
    });
  } else if (radioBtn2.checked) {
    axios.get("http://localhost:4000/api/fortuneAll/").then((res) => {
      const data = res.data;
      addToView(data);
    });
  } else {
    alert("Select Compliment or Fortune");
  }
};

const putUpdateArray = (body) => {
  axios.put(`http://localhost:4000/api/${body.name}/`, body).then((res) => {
    const data = res.data;
    addToView(data);
    console.log(data);
  });
};

function updateArray() {
  id = document.getElementById("index-input");
  input = document.getElementById("adjust-input");

  bodyObj = {
    name: "",
    input: input.value,
    id: id.value,
  };

  if (radioBtn1.checked) {
    bodyObj.name = "compliment";
    putUpdateArray(bodyObj);
    console.log(bodyObj);
  } else if (radioBtn2.checked) {
    bodyObj.name = "fortune";
    putUpdateArray(bodyObj);
  }
}

showAllBtn.addEventListener("click", showAll);
randomBtn.addEventListener("click", random);
addBtn.addEventListener("click", pushInput);
deleteBtn.addEventListener("click", deleteCompliment);
changeBtn.addEventListener("click", updateArray);
