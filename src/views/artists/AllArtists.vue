<script setup>
import { ref, onMounted } from "vue";
import ConfirmDeletePopup from "../../components/ConfirmDeletePopup.vue";
import axios from "axios";
const allArtists = ref([]);
const itemToDeleteId = ref([0]);
let deleteModal;

onMounted(() => {
  deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal"));

  axios.get("http://localhost:3000/artists").then((response) => {
    allArtists.value = response.data;
  });
});

const openDeleteModal = (id) => {
  itemToDeleteId.value = id;
  deleteModal.show();
};

const confirmDelete = () => {
  axios
      .delete(`http://localhost:3000/artists/${itemToDeleteId.value}`)
      .then(() => {
        allArtists.value = allArtists.value.filter(
            (_) => _.id !== itemToDeleteId.value
        );
        itemToDeleteId.value = 0;
        deleteModal.hide();
      });
};
</script>
<template>
  <div class="container mt-3">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="item in allArtists" :key="item.id">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" alt="..." width="250" height="250"/>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Location: {{ item.location }}</p>
            <router-link class="btn btn-primary" :to="`/edit-artists/${item.id}`"
            >Edit</router-link
            > |
            <button
                type="button"
                @click="openDeleteModal(item.id)"
                class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmDeletePopup @confirmdelete-click="confirmDelete"></ConfirmDeletePopup>
</template>
