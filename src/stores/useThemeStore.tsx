import {create} from "zustand";
import {persist} from "zustand/middleware";

interface ThemeStore {
    isDark: boolean;
    // toggleTheme: () => void; 아래와 동일
    toggleTheme: VoidFunction;
}

//export const단축키 만들자
// () () 두번 실행한다는 뜻
export const useThemeStore = create<ThemeStore>()(
    persist(
        set => ({
            isDark: false,
            toggleTheme: () => set(state => ({isDark: !state.isDark}))
        }),
        {name: "theme-storage"}
    ),
);

