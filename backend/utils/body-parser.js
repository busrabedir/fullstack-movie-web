// isteğin body parçalarını(chunk) birleştir
const bodyParser = (req) => {
  return new Promise((resolve, reject) => {
    try {
      // client'tan gelen veriyi tuttuğumuz değişken
      let body = "";

      // client'tan her body parçası geldiğinde elimizdeki body değişkenine ekle
      req.on("data", (chunk) => {
        // body'nin devamına gelen chunk'ı ekle
        body += chunk;
      });

      // aktarma işlemi bittiğinde json verisini js'e çevir
      req.on("end", () => {
        resolve(JSON.parse(body));
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = bodyParser;
