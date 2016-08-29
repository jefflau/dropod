import xml2js from 'xml2js'

const parser = new xml2js.Parser({
  explicitArray: false
});

export default function xmlParser(xml) {
  return new Promise(function(resolve, reject){
    parser.parseString(xml, function (err, result) {
      if(err){
        reject(err)
      } else {
        resolve(result.rss.channel)
      }
    })
  })
}
