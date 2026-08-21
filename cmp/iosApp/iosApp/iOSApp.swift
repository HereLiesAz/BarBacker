import SwiftUI

@main
struct iOSApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                // Compose draws its own surface edge to edge; the safe-area
                // inset would otherwise letterbox it against the status bar.
                .ignoresSafeArea(.all)
        }
    }
}
