<script setup>
import { onMounted } from "vue";

import { authStore } from "../../store/authStore";

const { logout } = authStore();

onMounted(() => {
  logout();
});
</script>
