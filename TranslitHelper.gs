var TranslitHelper = function () {
    /**
     * Возвращает входную строку, в которой все вхождения из search
     * заменены на строки из replase
     *
     * @param array search Строки поиска
     * @param array replase Строки замены
     * @param string subject Входная строка
     * @returns string
     */
    function str_replase(search, replase, subject) {
        var string = subject;

        for (var i = 0; i < search.length; i++) {
            var pos = 0;

            while ( -1 != (currPos = string.indexOf(search[i], pos) ) ) {
                string = string.slice(pos, currPos) + replase[i] + string.slice((currPos + search[i].length));
            }
        }

        return string;
    }

    return {
        /**
         * Транслитерация строки.
         *
         * @param string subject Входная строка
         * @param gost boolean Преобразование побуквенно (true) или с учетом буквосочетаний (false)
         * @returns string
         */
        translate: function (subject, gost) {
            var string = subject;
            var gost = gost || false;

            if (gost) {
                var replace = {"А": "A", "а": "a", "Б": "B", "б": "b", "В": "V", "в": "v", "Г": "G", "г": "g", "Д": "D", "д": "d",
                    "Е": "E", "е": "e", "Ё": "E", "ё": "e", "Ж": "Zh", "ж": "zh", "З": "Z", "з": "z", "И": "I", "и": "i",
                    "Й": "I", "й": "i", "К": "K", "к": "k", "Л": "L", "л": "l", "М": "M", "м": "m", "Н": "N", "н": "n", "О": "O", "о": "o",
                    "П": "P", "п": "p", "Р": "R", "р": "r", "С": "S", "с": "s", "Т": "T", "т": "t", "У": "U", "у": "u", "Ф": "F", "ф": "f",
                    "Х": "Kh", "х": "kh", "Ц": "Tc", "ц": "tc", "Ч": "Ch", "ч": "ch", "Ш": "Sh", "ш": "sh", "Щ": "Shch", "щ": "shch",
                    "Ы": "Y", "ы": "y", "Э": "E", "э": "e", "Ю": "Iu", "ю": "iu", "Я": "Ia", "я": "ia", "ъ": "", "ь": ""};
            } else {
                var arStrES = ["ае", "уе", "ое", "ые", "ие", "эе", "яе", "юе", "ёе", "ее", "ье", "ъе", "ый", "ий"];
                var arStrOS = ["аё", "уё", "оё", "ыё", "иё", "эё", "яё", "юё", "ёё", "её", "ьё", "ъё", "ый", "ий"];
                var arStrRS = ["а$", "у$", "о$", "ы$", "и$", "э$", "я$", "ю$", "ё$", "е$", "ь$", "ъ$", "@", "@"];

                var replace = {"А": "A", "а": "a", "Б": "B", "б": "b", "В": "V", "в": "v", "Г": "G", "г": "g", "Д": "D", "д": "d",
                    "Е": "Ye", "е": "e", "Ё": "Ye", "ё": "e", "Ж": "Zh", "ж": "zh", "З": "Z", "з": "z", "И": "I", "и": "i",
                    "Й": "Y", "й": "y", "К": "K", "к": "k", "Л": "L", "л": "l", "М": "M", "м": "m", "Н": "N", "н": "n",
                    "О": "O", "о": "o", "П": "P", "п": "p", "Р": "R", "р": "r", "С": "S", "с": "s", "Т": "T", "т": "t",
                    "У": "U", "у": "u", "Ф": "F", "ф": "f", "Х": "Kh", "х": "kh", "Ц": "Ts", "ц": "ts", "Ч": "Ch", "ч": "ch",
                    "Ш": "Sh", "ш": "sh", "Щ": "Shch", "щ": "shch", "Ъ": "", "ъ": "", "Ы": "Y", "ы": "y", "Ь": "", "ь": "",
                    "Э": "E", "э": "e", "Ю": "Yu", "ю": "yu", "Я": "Ya", "я": "ya", "@": "y", "$": "ye"};

                string = str_replase(arStrES, arStrRS, string);
                string = str_replase(arStrOS, arStrRS, string);
            }

            for (var key in replace) {
                if (replace.hasOwnProperty(key)) {
                    string = str_replase([key], [replace[key]], string);
                }
            }

            return string;
        }
    };
};
