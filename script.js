const sendForm = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const files = document.getElementById("files").files;
    const email = "tomek2x1@wp.pl"
    const phone = "555444333"
    const filesArr = [...files]

    const body = {
        subject: "Tytuł nagłówka",
        description: `
        name: ${name},
        surname: ${surname},
        `,
        email: email,
        phone: phone,
        priority: 1,
        status: 2,
        'attachments[]':filesArr,
    }

    const url = "https://newaccount1632792215290.freshdesk.com/api/v2/tickets";

    fetch(url, {
        method: "POST",
        headers: {
          Authorization: "VHE3djNOUEFwUWFSNXhscG80Zg==",
          "Content-Type": "multipart/form-data",
        //   "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((resp) => resp.json())
        .then(function (data) {
          if (data.id) {
              console.log(data.id)
          }
        })
        .catch(function (error) {
          console.log(error);
        });

};



const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", sendForm)