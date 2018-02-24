/**********************************************************

* md5.js
*
* A JavaScript implementation of the RSA Data Security, Inc. MD5
* Message-Digest Algorithm.
*
* Copyright (C) Paul Johnston 1999. Distributed under the LGPL.
***********************************************************/

/* to convert strings to a list of ascii values */
var sAscii = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var sAscii = sAscii + "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

/* convert integer to hex string */
var sHex = "0123456789ABCDEF";
function md5(i)
{
h = "";
for(j = 0; j <= 3; j++)
{
h += sHex.charAt((i >> (j * 8 + 4)) & 0x0F) +
sHex.charAt((i >> (j * 8)) & 0x0F);
}
return h;
}

/* add, handling overflows correctly */
function add(x, y)
{
return ((x&0x7FFFFFFF) + (y&0x7FFFFFFF)) ^ (x&0x80000000) ^ (y&0x80000000);
}

/* MD5 rounds functions */
function R1(A, B, C, D, X, S, T)
{
q = add(add(A, (B & C) | (~B & D)), add(X, T));
return add((q << S) | ((q >> (32 - S)) & (Math.pow(2, S) - 1)), B);
}

function R2(A, B, C, D, X, S, T)
{
q = add(add(A, (B & D) | (C & ~D)), add(X, T));
return add((q << S) | ((q >> (32 - S)) & (Math.pow(2, S) - 1)), B);
}

function R3(A, B, C, D, X, S, T)
{
q = add(add(A, B ^ C ^ D), add(X, T));
return add((q << S) | ((q >> (32 - S)) & (Math.pow(2, S) - 1)), B);
}

function R4(A, B, C, D, X, S, T)
{
q = add(add(A, C ^ (B | ~D)), add(X, T));
return add((q << S) | ((q >> (32 - S)) & (Math.pow(2, S) - 1)), B);
}

/* main entry point */
function calcMD5(sInp) {

/* Calculate length in machine words, including padding */
wLen = (((sInp.length + 8) >> 6) + 1) << 4;
var X = new Array(wLen);

/* Convert string to array of words */
j = 4;
for (i = 0; (i * 4) < sInp.length; i++)
{
X[i] = 0;
for (j = 0; (j < 4) && ((j + i * 4) < sInp.length); j++)
{
X[i] += (sAscii.indexOf(sInp.charAt((i * 4) + j)) + 32) << (j * 8);
}
}

/* Append padding bits and length */
if (j == 4)
{
X[i++] = 0x80;
}
else
{
X[i - 1] += 0x80 << (j * 8);
}
for(; i < wLen; i++) { X[i] = 0; }
X[wLen - 2] = sInp.length * 8;

/* hard-coded initial values */
a = 0x67452301;
b = 0xefcdab89;
c = 0x98badcfe;
d = 0x10325476;

/* Process each 16-word block in turn */
for (i = 0; i < wLen; i += 16) {
aO = a;
bO = b;
cO = c;
dO = d;

a = R1(a, b, c, d, X[i+ 0], 7 , 0xd76aa478);
d = R1(d, a, b, c, X[i+ 1], 12, 0xe8c7b756);
c = R1(c, d, a, b, X[i+ 2], 17, 0x242070db);
b = R1(b, c, d, a, X[i+ 3], 22, 0xc1bdceee);
a = R1(a, b, c, d, X[i+ 4], 7 , 0xf57c0faf);
d = R1(d, a, b, c, X[i+ 5], 12, 0x4787c62a);
c = R1(c, d, a, b, X[i+ 6], 17, 0xa8304613);
b = R1(b, c, d, a, X[i+ 7], 22, 0xfd469501);
a = R1(a, b, c, d, X[i+ 8], 7 , 0x698098d8);
d = R1(d, a, b, c, X[i+ 9], 12, 0x8b44f7af);
c = R1(c, d, a, b, X[i+10], 17, 0xffff5bb1);
b = R1(b, c, d, a, X[i+11], 22, 0x895cd7be);
a = R1(a, b, c, d, X[i+12], 7 , 0x6b901122);
d = R1(d, a, b, c, X[i+13], 12, 0xfd987193);
c = R1(c, d, a, b, X[i+14], 17, 0xa679438e);
b = R1(b, c, d, a, X[i+15], 22, 0x49b40821);

a = R2(a, b, c, d, X[i+ 1], 5 , 0xf61e2562);
d = R2(d, a, b, c, X[i+ 6], 9 , 0xc040b340);
c = R2(c, d, a, b, X[i+11], 14, 0x265e5a51);
b = R2(b, c, d, a, X[i+ 0], 20, 0xe9b6c7aa);
a = R2(a, b, c, d, X[i+ 5], 5 , 0xd62f105d);
d = R2(d, a, b, c, X[i+10], 9 , 0x2441453);
c = R2(c, d, a, b, X[i+15], 14, 0xd8a1e681);
b = R2(b, c, d, a, X[i+ 4], 20, 0xe7d3fbc8);
a = R2(a, b, c, d, X[i+ 9], 5 , 0x21e1cde6);
d = R2(d, a, b, c, X[i+14], 9 , 0xc33707d6);
c = R2(c, d, a, b, X[i+ 3], 14, 0xf4d50d87);
b = R2(b, c, d, a, X[i+ 8], 20, 0x455a14ed);
a = R2(a, b, c, d, X[i+13], 5 , 0xa9e3e905);
d = R2(d, a, b, c, X[i+ 2], 9 , 0xfcefa3f8);
c = R2(c, d, a, b, X[i+ 7], 14, 0x676f02d9);
b = R2(b, c, d, a, X[i+12], 20, 0x8d2a4c8a);

a = R3(a, b, c, d, X[i+ 5], 4 , 0xfffa3942);
d = R3(d, a, b, c, X[i+ 8], 11, 0x8771f681);
c = R3(c, d, a, b, X[i+11], 16, 0x6d9d6122);
b = R3(b, c, d, a, X[i+14], 23, 0xfde5380c);
a = R3(a, b, c, d, X[i+ 1], 4 , 0xa4beea44);
d = R3(d, a, b, c, X[i+ 4], 11, 0x4bdecfa9);
c = R3(c, d, a, b, X[i+ 7], 16, 0xf6bb4b60);
b = R3(b, c, d, a, X[i+10], 23, 0xbebfbc70);
a = R3(a, b, c, d, X[i+13], 4 , 0x289b7ec6);
d = R3(d, a, b, c, X[i+ 0], 11, 0xeaa127fa);
c = R3(c, d, a, b, X[i+ 3], 16, 0xd4ef3085);
b = R3(b, c, d, a, X[i+ 6], 23, 0x4881d05);
a = R3(a, b, c, d, X[i+ 9], 4 , 0xd9d4d039);
d = R3(d, a, b, c, X[i+12], 11, 0xe6db99e5);
c = R3(c, d, a, b, X[i+15], 16, 0x1fa27cf8);
b = R3(b, c, d, a, X[i+ 2], 23, 0xc4ac5665);

a = R4(a, b, c, d, X[i+ 0], 6 , 0xf4292244);
d = R4(d, a, b, c, X[i+ 7], 10, 0x432aff97);
c = R4(c, d, a, b, X[i+14], 15, 0xab9423a7);
b = R4(b, c, d, a, X[i+ 5], 21, 0xfc93a039);
a = R4(a, b, c, d, X[i+12], 6 , 0x655b59c3);
d = R4(d, a, b, c, X[i+ 3], 10, 0x8f0ccc92);
c = R4(c, d, a, b, X[i+10], 15, 0xffeff47d);
b = R4(b, c, d, a, X[i+ 1], 21, 0x85845dd1);
a = R4(a, b, c, d, X[i+ 8], 6 , 0x6fa87e4f);
d = R4(d, a, b, c, X[i+15], 10, 0xfe2ce6e0);
c = R4(c, d, a, b, X[i+ 6], 15, 0xa3014314);
b = R4(b, c, d, a, X[i+13], 21, 0x4e0811a1);
a = R4(a, b, c, d, X[i+ 4], 6 , 0xf7537e82);
d = R4(d, a, b, c, X[i+11], 10, 0xbd3af235);
c = R4(c, d, a, b, X[i+ 2], 15, 0x2ad7d2bb);
b = R4(b, c, d, a, X[i+ 9], 21, 0xeb86d391);

a = add(a, aO);
b = add(b, bO);
c = add(c, cO);
d = add(d, dO);
}
return md5(a) + md5(b) + md5(c) + md5(d);
}



var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
//64 ����
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
    c1 = str.charCodeAt(i++) & 0xff;
    if(i == len)
    {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt((c1 & 0x3) << 4);
        out += "==";
        break;
    }
    c2 = str.charCodeAt(i++);
    if(i == len)
    {
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt((c2 & 0xF) << 2);
        out += "=";
        break;
    }
    c3 = str.charCodeAt(i++);
    out += base64EncodeChars.charAt(c1 >> 2);
    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
    out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
//64 ����
function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
    /* c1 */
    do {
        c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c1 == -1);
    if(c1 == -1)
        break;
    /* c2 */
    do {
        c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
    } while(i < len && c2 == -1);
    if(c2 == -1)
        break;
    out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    /* c3 */
    do {
        c3 = str.charCodeAt(i++) & 0xff;
        if(c3 == 61)
        return out;
        c3 = base64DecodeChars[c3];
    } while(i < len && c3 == -1);
    if(c3 == -1)
        break;
    out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
    /* c4 */
    do {
        c4 = str.charCodeAt(i++) & 0xff;
        if(c4 == 61)
        return out;
        c4 = base64DecodeChars[c4];
    } while(i < len && c4 == -1);
    if(c4 == -1)
        break;
    out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}



function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for(i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
        out += str.charAt(i);
    } else if (c > 0x07FF) {
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
    } else {
        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
    }
    }
    return out;
}
function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while(i < len) {
    c = str.charCodeAt(i++);
    switch(c >> 4)
    { 
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += str.charAt(i-1);
        break;
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = str.charCodeAt(i++);
        char3 = str.charCodeAt(i++);
        out += String.fromCharCode(((c & 0x0F) << 12) |
                       ((char2 & 0x3F) << 6) |
                       ((char3 & 0x3F) << 0));
        break;
    }
    }
    return out;
}
