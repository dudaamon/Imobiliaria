const imoveis = [
	{
		title: "Casa na Fazenda",
		value: 200000,
		description:
			"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys d",
		quantitybaths: 1,
		quantityrooms: 1,
		image:
			"https://projetaronline.com/wp-content/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg",
	},
	{
		title: "Apartamento no Centro",
		value: 250000,
		description:
			"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		quantitybaths: 1,
		quantityrooms: 2,
		image:
			"https://projetaronline.com/wp-content/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg",
	},
	{
		title: "Casa na avenida",
		value: 180000,
		description:
			"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
		quantitybaths: 1,
		quantityrooms: 1,
		image:
			"https://projetaronline.com/wp-content/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg",
	},
	{
		title: "Casa em Condomínio",
		value: 380000,
		description:
			"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
		quantitybaths: 2,
		quantityrooms: 3,
		image:
			"https://projetaronline.com/wp-content/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg",
	},
];

console.log(imoveis);
localStorage.setItem("database", JSON.stringify(imoveis)); //Método para armazenar os imoveis dentro do localstorage

const createCard = (
	title,
	value,
	description,
	quantitybaths,
	quantityrooms,
	image
) => {
	return `
    <div class="card">
        <div class="card-header" style="background-image: url(${image});"></div>
        <div class="card-body">
            <h2>${title}</h2>
            <h3>${value}</h3>
            <p>${description}</p>
        </div>
        <div class="card-footer">
          <div class="card-icons">
            <div class="card-icon">
              <img src="assets/bed-solid 1.png" alt="icone de uma cama" />
              <span>${quantityrooms}</span>
            </div>
            <div class="card-icon">
              <img
                src="assets/bath-solid 1.png"
                alt="icone de uma banheira"
              />
              <span>${quantitybaths}</span>
            </div>
          </div>
          <div class="card-buttons">
            <button>Detalhes</button>
          </div>
        </div>
      </div>
  `;
};

let html = "";

imoveis.forEach((imovel) => {
	html += createCard(
		imovel.title,
		imovel.value,
		imovel.description,
		imovel.quantitybaths,
		imovel.quantityrooms
	);
});

document.getElementById("cards").innerHTML = html; // append shield não substitui, o inner sim
