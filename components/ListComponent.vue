<script>
export default {
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div id="ListMain">
    <table id="tableHouse">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Active</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.active }}</td>
          <td>{{ item.order }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#ListMain {
  grid-column: 3 / span 12;
  grid-row: 3 / span 9;
  background: rgb(42, 40, 40);
  color: white;
  justify-content: center;
}
#tableHouse {
  background: rgb(235, 138, 93);
  width: 100%;
  padding: 1em;
  border: 2px solid white;
}
th,
td {
  padding: 0.5em;
}
th {
  text-decoration: underline;
}
</style>
