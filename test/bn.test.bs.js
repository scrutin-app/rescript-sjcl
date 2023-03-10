// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zora = require("zora");
var Caml_array = require("rescript/lib/js/caml_array.js");
var SjclWithAll = require("sjcl-with-all");

var bn_mod = {
  a: "cfb9caac51a13eb13592d47863e463b306547683070424a7c7a41302e30453c2f5f6f2c432a267d2d72746c534d6c233c5c6740776e5c473592d4786377d745c534f2d502427612249266a45382a6f512e527d475577484f277e7a4ce62c7919c0b34b9f125124c574bac9738edb0998bfa8f5b8076c5266ae06e1b9121303d7ff8f0380a24526474d592a7d5e69f125124c574bac9738ed77d745c534f2d502427612249266a45382a6f512e527d4755560144ced0a078454a727d24db5d77484f27b0998bfa8f5b8076c5266ae06e1b9121303d7ff8f0380a24526474d592a7d5e682b2358377d745c534f2d502427612249266a45382a6f512e527d4755560144ced0a078454a727d24db5d77484f277e7b3d28256d71482d2a287d666b3ac7053b02c6543592d47863b6a0541cfa603219b694bec483592d478630",
  N: "c3219b694b6a0541cfa60c46a0541cfa60c4c574bac9738edb0998bfa8f5b8076c5266ae06e1b9121303d7ff8f0380a2f51de2fdc93bba83b4c4f49e2D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D498254b6afa60c4835920541cfa60c4c4f49e2D3383B4813D692C855c8a7d64e9",
  r: "3c3312d60b052287f92b61bc1e890a3f43f46f302086fc19d7555059f957607981f89d725b775c70c47e940a874e143efec01558c9cbe5f15df716d812c61cef1a2c6561ee9990b5db8e54827a16018fee6c111c9a8e66897f849ccd9114639ab086f8ecfa558b5855547b1eb110e245f51598bc98486af1813423877189e66a84cd7ead55"
};

var bn_mulmod = {
  a: "94B7555AABE9127CC58CCF4993DB6CF84D16C1244021612e464d6e2f4c724f2b3e275a43385a5a6d4c7441284648362a4526474d592a7d5e682b2358377d745c534f2d502427612249266a45382a6f512e527d475577484f277e7b3d28256d71482d2a287d666b52247027",
  b: "70424648242f4273612a524e4a44717b655b487b395d2f407d4c7141503e33442a657637257968345237677d6e736f5f24546b642a23283e463b306547683070424a7c7a41302e30453c2f5f6f2c432a267d2d72746c534d6c233c5c6740776e5c4725562029623d7a673d",
  N: "EEAF0AB9ADB38D8775FF3C0B9EA27496EA81D3383B4813D692C6E0E0D5D8E250B98BE48E495C1D6089DAD15DC7D7B46154D6B6CE8EF4AD69B15D4982559B297BCF1885C529F566660E57EC68EDBC3C05726CC02FD4CBF4976EAA9AFD5138FE8376435B9FC61D2FC0EB06E3",
  r: "266bd21de6da4ce62c7919c0b34b9f125124c574bac9738edb0998bfa8f5b8076c5266ae06e1b9121303d7ff8f0380a2f51de2fdc93bba83b4c4f49e2ddc65c24a8e2ecbac374e49181792aeeada8fc5438073187b2cf3d63f93d560144ced0a078454a727d24db5d09e56"
};

var bn_powermod = [
  {
    g: "2",
    x: "3",
    N: "3",
    v: "2"
  },
  {
    g: "2",
    x: "10000000000000000000000000",
    N: "539",
    v: "4b6"
  },
  {
    g: "11",
    x: "5a",
    N: "81558851B",
    v: "69F775F70"
  },
  {
    g: "2",
    x: "0x844A000000000000000000000",
    N: "d",
    v: "9"
  },
  {
    g: "2",
    x: "1010",
    N: "83",
    v: "3b"
  },
  {
    g: "2",
    x: "43207437777777877617151",
    N: "d",
    v: "2"
  },
  {
    g: "2",
    x: "389274238947216444871600001871964319565192765874149",
    N: "75",
    v: "2c"
  },
  {
    g: "2",
    x: "89457115510016156219817846189181057618965150496979174671534084187",
    N: "1897166415676096761",
    v: "16840615e646a4c5c8d"
  },
  {
    g: "2",
    x: "eeaf0ab9adb3008dd6c314c9c25600057674df692c0006e0d5d8e2050b98be48e4",
    N: "b48130d6e07674df740e1d33b4816e0d5d8e20e2050b98be48e457674df74096ea",
    v: "9c3219b694befb9caac51a13eb1ac7053b02c654b6a0541cfa60c483592d478630"
  }
];

var TV = {
  bn_mod: bn_mod,
  bn_mulmod: bn_mulmod,
  bn_powermod: bn_powermod
};

Zora.test("Bignum modular reduction test", (function (t) {
        var a = new SjclWithAll.bn(bn_mod.a);
        var n = new SjclWithAll.bn(bn_mod.N);
        var r = a.mod(n);
        var res = r.equals(new SjclWithAll.bn(bn_mod.r));
        t.equal(res, true, "Should match");
      }));

Zora.test("Bignum modular multiplication test", (function (t) {
        var a = new SjclWithAll.bn(bn_mulmod.a);
        var b = new SjclWithAll.bn(bn_mulmod.b);
        var n = new SjclWithAll.bn(bn_mulmod.N);
        var r = a.mulmod(b, n);
        var res = r.equals(new SjclWithAll.bn(bn_mulmod.r));
        t.equal(res, true, "Should match");
      }));

Zora.test("Bignum modular exponentiation test", (function (t) {
        for(var i = 0 ,i_finish = bn_powermod.length; i < i_finish; ++i){
          var tv = Caml_array.get(bn_powermod, i);
          var g = new SjclWithAll.bn(tv.g);
          var x = new SjclWithAll.bn(tv.x);
          var n = new SjclWithAll.bn(tv.N);
          var v = g.powermod(x, n);
          t.equal(v.equals(new SjclWithAll.bn(tv.v)), true, "Should match");
        }
      }));

Zora.test("Bignum toString test", (function (t) {
        var res = new SjclWithAll.bn("bbdf72").power(10).toString();
        t.equal(res, "0xb99c06973dcc72429aa1dd41b0bc40a424289a05d3d72f066ee4e71c400", "Should match");
      }));

exports.TV = TV;
/*  Not a pure module */
