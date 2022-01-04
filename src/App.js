import React from 'react';
import { useDispatch } from 'react-redux';
import { getApi } from './store/actions/upload';

const App = () => {
  const showTextFile =(e) => {
    const file = e.target.files;
    console.log('file : ', file)

    let dir = ''
    let dirs = []

    //folder dircetory 구함
    for(var i=0;i<file.length;i++){
      dir = file[i].webkitRelativePath;
      const test = dir.split('/')
      test.pop()
      const folder = test.pop()
      dirs.push(folder)
    }

    const set = new Set(dirs)
    const folderDir = [...set]

    let filelist = []


    for (var j=0 ; j<folderDir.length; j++){

      filelist = []

      for (var f=0 ; f<file.length ; f++ ){
        var t = file[f].webkitRelativePath.match(folderDir[j])
        if(t !==null){
          if(t[0] === folderDir[j]){
            filelist.push(file[f])
          }
        }
      }
      
      console.log(filelist)

    }

  }

  const dispatch = useDispatch()

  const onClick = async() => {
    console.log('get api')
    for (var i=1; i <5; i++) {
      try{
        await dispatch(getApi(i));
      }catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <form>
        <input type="file" id="directory-upload" webkitdirectory="" onChange={showTextFile}/>
        <div className="file_list">
          <p></p>
        </div>
      </form>
      <button onClick={onClick}>get api</button>
    </div>
  );
};

export default App;