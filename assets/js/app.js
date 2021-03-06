webpackJsonp(
  [1],
  {
    unknown: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("unknown1"),
        r = {
          name: "custom-textarea",
          props: {
            value: { required: !0, type: [Number, String] },
            protectedSelection: { type: String, default: "0,0" },
          }, /*
          data: function () {
            return { val: "" };
          },  
          computed: {
            protectedSelectionStart: function () {
              return parseInt(this.protectedSelection.split(",")[0]);
            },
            protectedSelectionEnd: function () {
              return parseInt(this.protectedSelection.split(",")[1]);
            },
          }, */
          methods: {
            /*
            onInput: function () {
              this.$emit("input", this.val);
            },
            */
            onDeleteKeyDown: function (e) {
              var t = e.target;
              console.log(
                "deleteKeyDown:\n        selectionStart: " +
                  t.selectionStart +
                  "\n        selectionStart: " +
                  t.selectionEnd +
                  "\n        length: " +
                  t.value.length +
                  "\n        value: " +
                  t.value +
                  "\n        keyCode: " +
                  e.which +
                  "\n      "
              ),
                /* this.isContainsProtectedSelection(
                  t.selectionStart,
                  t.selectionEnd
                ) && */ e.preventDefault();
            },
            /* isContainsProtectedSelection: function (e, t) {
              return !(
                e > this.protectedSelectionEnd ||
                t < this.protectedSelectionStart
              );
            }, */
          },
          mounted: function () {
            this.val = this.value;
          },
        },
        i = {
          render: function () {
            var e = this,
              t = e.$createElement;
            return (e._self._c || t)("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: e.val,
                  expression: "val",
                },
              ],
              ref: "textarea",
              domProps: { value: e.val },
              on: {
                input: [
                  function (t) {
                    t.target.composing || (e.val = t.target.value);
                  },
                  /* e.onInput, */
                ],
                keydown: function (t) {
                  return "button" in t ||
                    !e._k(t.keyCode, "delete", [8, 46], t.key, [
                      "Backspace",
                      "Delete",
                    ])
                    ? e.onDeleteKeyDown(t)
                    : null;
                },
              },
            });
          },
          staticRenderFns: [],
        };
      var a = {
          name: "App",
          components: {
            CustomTextarea: n("unknown4")(
              r,
              i,
              !1,
              function (e) {
                n("unknown2");
              },
              /* "data-v-6067cfd8", */
              null
            ).exports,
          }, /*
          data: function () {
            return { str: "", protectedSelection: "0,0" };
          }, */
        },
        c = {
          render: function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { attrs: { id: "app" } },
              [
                n("custom-textarea", {
                  attrs: {
                    rows: "6",
                    "protected-selection": e.protectedSelection,
                  },
                  model: {
                    value: e.str,
                    callback: function (t) {
                      e.str = t;
                    },
                    expression: "str",
                  },
                }),
                e._v(" "),
                n("div", [e._v(e._s(JSON.stringify(e.str, null, 4)))]),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var l = n("unknown4")(
        a,
        c,
        !1,
        function (e) {
          n("unknown3");
        },
        null,
        null
      ).exports;
      (o.a.config.productionTip = !1),
        new o.a({ el: "#app", components: { App: l }, template: "<App/>" });
    },
    unknown2: function (e, t) {},
    unknown3: function (e, t) {},
  },
  ["unknown"]
);
