
function Objects()
{
  var recipes = new Object();
  //recipes[dinner]="poori";
  return recipes;
}
function updateObjectWithKeyAndValue(object, key, value)
{
  var object={'prop':1};
object[key]=value;
return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{

  var object={'prop':1};
object[key]=value;
return object;
}

function deleteFromObjectByKey(object, key)
{
    var object={'prop':1};
    var newObj = Object.assign({}, object)
  newObj=delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key)
{
      object={'prop':1};
      //var newObj = Object.assign({}, obj)
      //newObj=delete obj.key;
      delete object.key;
        return object;
}
