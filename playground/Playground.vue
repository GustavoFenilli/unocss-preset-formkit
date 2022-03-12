<script setup lang="ts"></script>

<template>
  <FormKit type="form">
    <FormKit
      label="Invalid input"
      placeholder="Enter something here..."
      validation="required"
      validation-visibility="live"
      inputClass="formkit-invalid:ma4"
    />
    <FormKit label="Disabled input" :disabled="true" placeholder="Enter something here..." />
    <FormKit label="Complete input" value="I have a value" />
    <FormKit
      label="Complete input"
      type="select"
      multiple
      :options="['option-1', 'option-2']"
      value="I have a value"
    />
  </FormKit>
</template>
