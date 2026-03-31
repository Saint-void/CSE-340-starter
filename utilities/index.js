function buildVehicleDetail(data) {
  return `
    <section class="vehicle-detail">
      
      <div class="vehicle-image">
        <img src="${data.inv_image}" alt="${data.inv_make} ${data.inv_model}">
      </div>

      <div class="vehicle-info">
        <h1>${data.inv_make} ${data.inv_model}</h1>
        <h2>$${Number(data.inv_price).toLocaleString("en-US")}</h2>

        <p><strong>Year:</strong> ${data.inv_year}</p>
        <p><strong>Mileage:</strong> ${Number(data.inv_miles).toLocaleString()}</p>
        <p><strong>Description:</strong> ${data.inv_description}</p>
        <p><strong>Color:</strong> ${data.inv_color}</p>

      </div>

    </section>
  `;
}

module.exports = { buildVehicleDetail };