<script>
  import Router from "svelte-spa-router";
  import Gerbang from "./kunci/src/Gerbang.svelte";
  import data from "../android.json";

  const routes = {};
</script>

<Gerbang namaAplikasi={data.title}>
  <Router {routes} />
</Gerbang>
