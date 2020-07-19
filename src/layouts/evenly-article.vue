<template>
  <div class="content">
    <div class="q-pa-md">
      <div class="row justify-start text-h5">
        <div class="self-center">
          <slot name="head"></slot>
        </div>
      </div>
    </div>
    <div>
      <div class="content">
        <div class="q-pa-md">
          <div class="row justify-start text-h6">
            <div class="self-center">
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
