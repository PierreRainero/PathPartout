<template>
    <div class="left-panel">
      <div class="navbar-brand">Ajouter un tracer</div>
        <div class="formulaire">
            <div class="form-group">
                <label for="nameRun"><b>1.</b> Donner un nom à votre tracer</label>
                <input type="text" class="form-control" id="nameRun" placeholder="Ballade en forêt">
            </div>
            <div class="form-group">
                <label for="description"><b>2.</b> Ajouter une courte description</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Idéal avec les enfants pour se rafraîchir."></textarea>
            </div>
            <div class="form-group">
                <label for="description"><b>3.</b> Ajouter des points en cliquant sur la carte pour définir votre tracer</label>
                <p>{{this.nbPoints > 1 ? `${this.nbPoints} points ajoutés à votre tracer` : `${this.nbPoints} point ajouté à votre tracer`}}</p>
            </div>
        </div>
          <div class="btn-add">
            <button type="button" class="btn btn-secondary" v-on:click="back()">&lt; Retour</button>
            <button type="button" class="btn btn-success" v-on:click="add()">Sauvegarder</button>
          </div>
    </div>
</template>


<script>
export default {
  name: "AddRun",
  components: {},
  data: function() {
    return {
        nbPoints: 0
    };
  },
  methods: {
    back: function() {
      this.$emit("back");
    },
    add: function() {
      console.log("add run");
      this.$emit("back");
    }
  }
};
</script>


<style scoped>
.navbar-brand {
  background: #006b00;
  width: 100%;
  color: white;
  padding-right: 0px;
  margin-right: 0px;
  cursor: pointer;
}

.scrollable {
  height: 88vh;
  overflow: scroll;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

.btn-add {
  margin-top: 30px;
}

.formulaire {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
}

.form-group {
    margin-bottom: 40px;
}
</style>
