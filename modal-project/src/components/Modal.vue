<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal</h1>
        </div>
    </div>
</template>

<style>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
</style>