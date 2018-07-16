/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { READ } = require("eslint-utils")
const defineHandlers = require("../../util/define-prefer-global-handlers")

module.exports = {
    meta: {
        docs: {
            description:
                'enforce either `Buffer` or `require("buffer").Buffer`',
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-node/blob/v6.0.1/docs/rules/prefer-global/buffer.md",
        },
        fixable: null,
        schema: [{ enum: ["always", "never"] }],
        messages: {
            preferGlobal:
                "Unexpected use of 'require(\"buffer\").Buffer'. Use the global variable 'Buffer' instead.",
            preferModule:
                "Unexpected use of the global variable 'Buffer'. Use 'require(\"buffer\").Buffer' instead.",
        },
    },

    create(context) {
        return defineHandlers(context, {
            globals: {
                Buffer: { [READ]: true },
            },
            modules: {
                buffer: {
                    Buffer: { [READ]: true },
                },
            },
        })
    },
}