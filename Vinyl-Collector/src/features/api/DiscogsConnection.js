import DiscogsClient from 'disconnect/lib/client';

export function GetClient(){
    return new Discogs({
        userToken:process.env.TZ
    });
}

var Discogs = require('disconnect').Client;

var db = new Discogs().database();