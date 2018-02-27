
 const Album = {
    name: 'Albums',
    primarykey:'albumId',
    properties: {
      albumId:	'int',
      id:	'int',
      title	:	'string',
      url:		'string',
      thumbnailUrl:	'string',
    }
  };

  module.exports = Album;