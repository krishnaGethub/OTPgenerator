const keys = {
    number: "0123456789",
  };
  const getKey = [
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
  ];
  function createPassword() {
    const number = document.getElementById("number").checked;
    if (number === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
  function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  }