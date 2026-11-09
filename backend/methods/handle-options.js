const handleOptions = (req, res) => {
  // * hangi isteklere izin verilecek
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  // * body'e sahip isteklerde hangi formatta veri göndereceğini belirleyen header'a izin ver
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // * 200 olumlu yanıtı gönder
  res.end();
};

module.exports = handleOptions;
