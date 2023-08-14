<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
let newArtist = reactive({
  name: "",
  location: "",
  imageUrl: "",
});
const router = useRouter();
const addNewArtist = () => {
  axios.post("http://localhost:3000/artists", newArtist).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="container mt-4 w-50">
    <form @submit.prevent="addNewArtist">
      <legend >Add New Artist's</legend>
      <div class="mb-3">
        <label for="txtartistName" class="form-label">Artist Name</label>
        <input
            type="text"
            v-model="newArtist.name"
            class="form-control"
            id="txtartistName"
        />
      </div>
      <div class="mb-3">
        <label for="txtLocation" class="form-label">Location</label>
        <input
            type="text"
            v-model="newArtist.location"
            class="form-control"
            id="txtLocation"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Image URL</label>
        <input
            type="text"
            v-model="newArtist.imageUrl"
            class="form-control"
            id="txtImageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>