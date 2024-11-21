<template>
  <div class="catalog">
    <div class="container">
      <h2>
        Продукция корпорации «Галактика»
      </h2>
      <div class="catalog-content">
        <div class="row catalog-row">
          <div class="col-9 catalog-text">
            <h3>
              <a href="/pages/products/amm.html">«Галактика AMM»</a>
            </h3>
            <p>Постройте прибыльный и эффективный производственный процесс на любом предприятии</p>
          </div>
          <div class="col-3">
            <img class="catalog-img " src="@/assets/img/catalog/amm.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogPage',
  meta: {
    title: 'Каталог — Корпорация «Галактика»'
  },
};
</script>