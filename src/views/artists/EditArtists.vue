<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

let artistToUpdate = reactive({
  id: 0,
  name: "",
  location: "",
  imageUrl: "",
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  axios
      .get(`http://localhost:3000/artists/${route.params.id}`)
      .then((response) => {
        artistToUpdate.id = response.data.id;
        artistToUpdate.name = response.data.name;
        artistToUpdate.location = response.data.location;
        artistToUpdate.imageUrl = response.data.imageUrl;
      });
});

const updateArtist = () => {
  axios.put(`http://localhost:3000/artists/${route.params.id}`, artistToUpdate).then(() => {
    router.push("/");
  });
};
</script>
<template>
  <div class="container mt-4 w-50">
    <form @submit.prevent="updateArtist">
      <legend>Update Artists</legend>
      <div class="mb-3">
        <label for="txtArtistName" class="form-label">Name</label>
        <input
            type="text"
            v-model="artistToUpdate.name"
            class="form-control"
            id="txtArtistName"
        />
      </div>
      <div class="mb-3">
        <label for="txtLocation" class="form-label">Location</label>
        <input
            type="text"
            v-model="artistToUpdate.location"
            class="form-control"
            id="txtLocation"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Image URL</label>
        <input
            type="text"
            v-model="artistToUpdate.imageUrl"
            class="form-control"
            id="txtImageUrl"
        />
      </div>

      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>