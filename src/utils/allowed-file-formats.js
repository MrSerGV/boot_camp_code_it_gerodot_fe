const allowedFileTypes = {
  types: [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ],
  isTypeAllowed(type) { 
    return this.types.includes(type) 
  }
};

export default allowedFileTypes;