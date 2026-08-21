// The Compose Multiplatform client lives in its own Gradle build, kept
// separate from the Capacitor wrapper in `android/`. Those two would
// otherwise fight over the root project name, the AGP version, and the
// `local.properties` SDK pointer, and `npx cap sync android` rewrites
// parts of `android/` from scratch — so nothing shared can live there.
rootProject.name = "barbacker-cmp"

pluginManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositories {
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
    }
}

include(":shared")
include(":composeApp")
